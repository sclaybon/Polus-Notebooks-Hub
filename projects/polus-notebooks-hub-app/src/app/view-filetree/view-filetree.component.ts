import {Component, OnInit} from '@angular/core';
// import { Filetree } from '../hub-services/filetree/filetree';
import {fileTreeService} from '../services/filetree/filetree.service';
import {SpawnService} from '../services/spawn/spawn.service';
import {DeleteHubServerService} from '../services/deleteHubServer/delete-hub-server.service';
import {AuthService} from '@labshare/ngx-core-services';

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';


export class FileNode {
  children: FileNode[];
  name: string;
  type: any;
}

@Component({
  selector: 'app-view-filetree',
  templateUrl: './view-filetree.component.html',
  styleUrls: ['./view-filetree.component.scss']
})

export class ViewFiletreeComponent implements OnInit {
  files = [];
  selectedFile: string;
  selectedPath: string;
  email: string;

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);


  constructor(private authService: AuthService, private fileTreeService: fileTreeService, private spawnServer: SpawnService, private deleteHubServerService: DeleteHubServerService) {
  
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  private _getChildren = (node: FileNode) => { 
    return observableOf(node.children); 
  };
  
  hasNestedChild = (_: number, nodeData: FileNode) => {return !(nodeData.type); };


  ngOnInit(): void {

    
  }

  onFileSelect(file: string, path: string): void {
    this.selectedFile = file;
    this.selectedPath = path;
    console.log(this.selectedFile);
    console.log(path);
  }

  stopServer(): void {

    this.authService.getProfile().subscribe(value => this.email = value.email);
    this.deleteHubServerService.deleteHubServer(this.email).subscribe(x => console.log(x));

  }

  getFileTree(): void {

    this.fileTreeService.getfileTree().subscribe((response: any) => {      
      this.files = [];
      this.files.push(...response)
      console.log("users array", this.files);  
    })            

    this.dataChange.next(this.files);

    console.log(this.files);

    // this.dataChange.next([
    //   {
    //     name: "folder",
    //     type: "",
    //     children: [
    //       {
    //         name: "test3",
    //         type: "exe",
    //         children: [ 
    //             {
    //               name: "testfinal",
    //             type: "exe",
    //             children: [],
    //           }
    //         ],
    //       },
    //       {
    //         name: "test4",
    //         type: "exe",
    //         children: [],
    //       }
    //     ],
    //   },
    //   {
    //     name: "test2",
    //     type: "exe",
    //     children: [],
    //   },
    // ]);

    console.log(this.files)
  }

  spawnDashboard(): void {

    // this.authService.getProfile().subscribe(value => this.email = value.email);
    // let url = 'https://polus-notebooks-hub.ci.aws.labshare.org/user/' + this.email.toLocaleLowerCase() + '/'
    // this.spawnServer.spawnServer(this.selectedFile,this.email).subscribe(x =>console.log(x)
    // );

    //spawn server by path on the shared pv with Jupyterhub
    this.authService.getProfile().subscribe(value => this.email = value.email);
    let url = 'https://polus-notebooks-hub.ci.aws.labshare.org/user/' + this.email.toLocaleLowerCase() + '/'

    console.log("spawning server" + this.selectedPath);

    this.spawnServer.spawnServer(this.selectedPath,this.email).subscribe(x =>console.log(x)
    );
    window.open(url, '_blank');   
    
  }

  getToken(): void{

      //add an ngIf conditional directive to protect against the router for the initial page load
      //consider routeGuards after the logic is working
      let token: String = this.authService.getAccessToken();
      console.log(token);


  }

  
}


