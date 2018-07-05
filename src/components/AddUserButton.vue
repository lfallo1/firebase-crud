<template>
    <section>
        <div class="control has-icons-left has-icons-right">
            <input :class="'input' + (username ? ' is-success' : '')"
                   type="text"
                   placeholder="Username"
                   v-model="username"
                    @keyup.enter="username ? addUser() : ''">
            <span :class="'icon is-small is-left' + inputIconClass">
            <i class="fas fa-user-plus"></i>
          </span>
            <span :class="'icon is-small is-right' + inputIconClass">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <div>
            <a :disabled="!username" class="button is-large is-success is-outlined is-fullwidth" @click="addUser">Add User</a>
        </div>
    </section>
</template>

<script>
    export default{
        data(){
          return {
              username: ''
          }
        },
        methods: {
          addUser(){
              this.$emit('addUser', this.username);
              this.username = '';
          }
        },
        computed: {
            inputIconClass(){
                return this.username ? ' has-text-success' : '';
            }
        }
    }
</script>