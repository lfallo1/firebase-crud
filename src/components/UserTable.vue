<template>
    <table class="table">
        <tbody>
        <tr v-for="u in users">
            <td>
                <span v-if="!u.isEditable">{{u.username}}</span>
                <div class="control has-icons-left has-icons-right" v-if="u.isEditable">
                    <input
                        :class="'input' + (u.username ? ' is-success' : '')"
                        type="text" placeholder="Username"
                        @keyup.enter="u.username ? updateUser(u) : ''"
                        v-model="u.username">
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </div>
            </td>
            <td>{{u.status}}</td>
            <td>
                <a v-if="!u.isEditable" class="button is-small is-danger" @click="deleteUser(u.id)" >
                  <span class="icon is-small">
                    <i class="fas fa-times"></i>
                  </span>
                    <span>Delete</span>
                </a>
                <a :disabled="!u.username"
                   class="button is-small is-success"
                   @click="updateUser(u)"
                   v-else>
                  <span class="icon is-small">
                    <i class="fas fa-save"></i>
                  </span>
                    <span>Save</span>
                </a>
            </td>
            <td>
                <a class="button is-small" @click="u.isEditable = !u.isEditable">
                  <span v-if="!u.isEditable">
                    <span class="icon is-small">
                      <i class="far fa-edit"></i>
                    </span>
                    <span>Edit</span>
                  </span>
                    <span v-else>
                    <span class="icon is-small">
                      <i class="fas fa-times"></i>
                    </span>
                    <span>Cancel</span>
                  </span>
                </a>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default{
        props: {
            users: {
                type: Array,
                required: true
            }
        },
        methods: {
            updateUser(user){
                this.$emit('updateUser', user)
            },
            deleteUser(id){
                this.$emit('deleteUser', id)
            }
        }
    }
</script>