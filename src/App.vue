<template>
  <div id="app" class="container">
    <div class="columns">
      <div class="column is-one-fifth">
        <AddUserButton @addUser="addUser" />
      </div>
      <div class="column is-three-fifths">
        <UserTable :users="users"
            @deleteUser="deleteUser"
            @updateUser="updateUser" />
      </div>
    </div>
  </div>
</template>

<script>

  import AddUserButton from './components/AddUserButton'
  import UserTable from './components/UserTable'
  import firebase from './firebaseRef.js'

  const database = firebase.database();
  const usersRef = database.ref('usersList');

export default {
    name: 'app',
    components:{
      AddUserButton,
      UserTable
    },
    data(){
      return {
          users: []
      }
    },
    methods: {
        addUser(username){
            usersRef.push({username: username, status: new Date().getTime()});
        },
        deleteUser(id){
          usersRef.child(id).remove();
        },
        updateUser (user) {
          usersRef.child(user.id).update(user)
          user.isEditable = false;
        }
    },
    created(){

        usersRef.on('child_added', snapshot => {
            this.users.push({...snapshot.val(), id: snapshot.key, isEditable: false});
        });

        usersRef.on('child_changed', snapshot => {
            let updatedUser = this.users.find(user => user.id === snapshot.key)
            updatedUser = {...snapshot.val(), id: snapshot.key, isEditable: false}
        })

        usersRef.on('child_removed', snapshot => {
            const deletedUser = this.users.find(user => user.id === snapshot.key)
            const index = this.users.indexOf(deletedUser)
            this.users.splice(index, 1);
        });
    }
}
</script>

<style>
</style>
