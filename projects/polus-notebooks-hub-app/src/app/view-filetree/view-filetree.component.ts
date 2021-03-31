import {Component, OnInit} from '@angular/core';
// import { Filetree } from '../hub-services/filetree/filetree';
import {FiletreeService} from '../hub-services/filetree/filetree.service';
import {SpawnService} from '../hub-services/spawn/spawn.service';

@Component({
  selector: 'app-view-filetree',
  templateUrl: './view-filetree.component.html',
  styleUrls: ['./view-filetree.component.scss']
})
export class ViewFiletreeComponent implements OnInit {
  filetreeInfo: any;

  constructor(private fileTreeService: FiletreeService, private spawnServer: SpawnService) {}

  ngOnInit(): void {}

  getFileTree(): void {
    // this.fileTreeService.getContainerFiletreeById();
  }

  spawnStreamlitDashboard(): void {
    this.spawnServer.spawnServer().subscribe(x => console.log(x));
    window.open('http://192.168.99.136:31970/user/admin/', '_blank');
  }
}
