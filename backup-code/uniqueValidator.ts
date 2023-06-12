
/*
      return timer(1000).pipe(distinctUntilChanged(), switchMap(() => {
          if (isEdit) {
            return this.api.get(`${UniquevalidatorService.path.merchantPath}/${control.value}/exist`).pipe(
              map((res: UserCheekResponse) => {
                // ; if username is already taken
                if (res) {
                  this.setUserFoundKeyClock(false, res?.userInfo);
                  return {uniqueValidator: true};
                } else {
                  this.clearUserFoundKeyClock(false);
                }
              })
            );
          }else{
            return this.api.get(`${UniquevalidatorService.path.merchantPath}/${control.value}/exist`).pipe(map(res => {
              if (res) {
                // tslint:disable-next-line:no-shadowed-variable
                return this.api.post(UniquevalidatorService.path.userExist, {email: control.value}).pipe(map((res: UserCheekResponse) => {
                    // ; if username is already taken
                    if (res.isExist) {
                      this.setUserFoundKeyClock(false, res?.userInfo);
                      return {uniqueValidator: true};
                    } else {
                      this.clearUserFoundKeyClock(false);
                    }
                  })
                ).subscribe();
              } else {
                return null;
              }
            }));

          }
        });
      */
