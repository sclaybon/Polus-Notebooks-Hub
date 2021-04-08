import {Component, OnInit} from '@angular/core';
// import { Filetree } from '../hub-services/filetree/filetree';
import {fileTreeService} from '../services/filetree/filetree.service';
import {SpawnService} from '../services/spawn/spawn.service';
import {DeleteHubServerService} from '../services/deleteHubServer/delete-hub-server.service';


@Component({
  selector: 'app-view-filetree',
  templateUrl: './view-filetree.component.html',
  styleUrls: ['./view-filetree.component.scss']
})
export class ViewFiletreeComponent implements OnInit {
  files = [];
  selectedFile?: string;


  constructor(private fileTreeService: fileTreeService, private spawnServer: SpawnService, private deleteHubServerService: DeleteHubServerService) {
  }

  ngOnInit(): void {

  }

  onFileSelect(file: string): void {
    this.selectedFile = file;
    console.log(this.selectedFile);
  }

  stopServer(): void {

    this.deleteHubServerService.deleteHubServer().subscribe(x => console.log(x));

  }

  getFileTree(): void {
    this.fileTreeService.getfileTree().subscribe((response: any) => {      
      this.files = [];
      this.files.push(...response)
      console.log("users array", this.files);  
    })            
    console.log(this.files)
  }

  spawnDashboard(): void {
    this.spawnServer.spawnServer(this.selectedFile).subscribe(x => console.log(x));
    window.open('http://192.168.99.161:30358/user/admin/', '_blank');
    // window.open('https://google.com');
  }
 
}
