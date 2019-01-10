checkActionButtonValidity = (users) => {
    if(users){
      let baseUser = users[0];
      const testUsers = users.filter(u => {
        if(u.status == baseUser.status) {
          return true
        } else return false
      })
      if (testUsers.length == users.length){
        if (baseUser.status == "Active"){
          this.restoreInvalid = true
          this.removeInvalid = false
        } else if (baseUser.status == "Inactive"){
          this.removeInvalid = true
          this.restoreInvalid = false
        }
      } else {
        this.removeInvalid = true
        this.restoreInvalid = true
      }
    } else {
      this.resetActionButtonValidity()
    }    
  }