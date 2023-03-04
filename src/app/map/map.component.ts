import { Component, OnInit } from '@angular/core';
import { filter, find, interval, of, switchMap, map, tap } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const broadCastVideo = interval(1000);
    const object = of({
      name: 'Tauhidul',
      age: 24,
      hobie: [
        { id: 1, title: 'Art' },
        { id: 2, title: 'Singer' },
        { id: 3, title: 'Programmer' },
      ],
    });

    object
      .pipe(
        // find(x => x.age === 24),
        switchMap((x) => x.hobie),
        map((response) => ({
          ...response,
          firstName: `${response.title} ${response.title}`,
        }))
      )
      .subscribe((res) => {
        console.log('Awesome :- ', res);
      });
  }

  /*
  private fetchMerchantUser(): void {
      this.setTableLoading(true);
      this.merchantUserService.getMerchantUser(this.params).pipe(

        // tap(x=> console.log('tap', x)),
        switchMap(x=> x),

        // tap(x=> console.log('tap 2', x)),
        // map(item=>({
        //   item,
        //   fullName: `Allahu Akbar`,
        // })),
        // map(response => ({
        //   ...response,
        //   firstName: `Tath is response`
        // })),

        map(item => {
          return {
            ...(item as Record<string, unknown>),
            fullName: 'Working perfectly',
          };
        })



        // map(item => ({
        //   ...item,
        //   fullName: `${item.firstName} ${item.lastName}`,
        //   itemNationalId:  item.nationalId ? item.nationalId : '',
        //   itemStatus:  (item.status === 'ACTIVE') ? 'Active' : 'Inactive',
        //   rolesStr: item.roles?.filter(role => role).map(i => i.name).join(', ').replaceAll('ROLE_', '')
        // })),
      ).subscribe(
        (response) => {
          console.log('astagfirullah: ',response);
          // this.listOfData = response?.map(item => {
          //   return this.mapItem(item);
          // });
          // this.setTableLoading(false);
        },
        (err: HttpErrorResponse) => {
          this.tableSettings.isLoading = false;
          this.utilsService.showError('message_merchantUserDataLoadFailed', err);
          this.setTableLoading(false);
        }
      );

    }
    */
}
