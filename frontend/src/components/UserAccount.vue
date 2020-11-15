<template>
  <v-card>
    <v-tabs centered>
      <v-tab >Login</v-tab>
      <v-tab > Register</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
      <v-main>
        <v-container>
            <div v-if="n==1">
                <v-card width="400" class="mx-auto mt-5" ref="form">
                <v-card-text>
                    <v-form>
                    <v-text-field 
                        label="Enter Email"
                        placeholder="john@gmail.com"
                        prepend-icon="mdi-email"
                        v-model="email"
                        :error-messages="errorMessages"
                        :rules="[() => !!email || 'This field is required']"
                        :state="emailState"
                        required
                    />
                    <v-text-field 
                        :type="showPassword ? 'text' : 'password'" 
                        label="Enter Password"
                        prepend-icon="mdi-lock"
                        v-model="password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                    />
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="primary" @click="loginClicked()">Login</v-btn>
                </v-card-actions>
                </v-card>
            </div>
            <div v-else>
                <v-card width="400" class="mx-auto mt-5" ref="form">
                <v-card-text>
                    <v-form>
                    <v-text-field 
                        label="First Name" 
                        prepend-icon="mdi-account-circle"
                        v-model="firstname"
                    />
                    <v-text-field 
                        label="Last Name" 
                        prepend-icon="mdi-account-circle"
                        v-model="lastname"
                    />

                    <v-combobox
                        prepend-icon="mdi-briefcase-account"
                        v-model="role"
                        label="Job Title"
                        :items="items"
                        chips
                    ></v-combobox>

                    <v-text-field 
                        label="Email" 
                        prepend-icon="mdi-email"
                        v-model="email"
                    />
                    <v-text-field 
                        label="Phone" 
                        prepend-icon="mdi-card-account-phone"
                        v-model="phone"
                    />
                    <v-text-field 
                        label="address" 
                        prepend-icon="mdi-home-map-marker"
                        v-model="address"
                    />
                    <v-text-field 
                        :type="showPassword ? 'text' : 'password'" 
                        label="Enter Password"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        v-model="password"
                    />
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="primary" @click="registerClicked()">Register</v-btn>
                </v-card-actions>
                </v-card>
            </div>
        </v-container>
        </v-main>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import moment from 'moment';
export default {
    name: 'UserAccount',
    data () {
      return {
        showPassword: false,
        role:'',
        items: [
          'Captain',
          'Manager'
        ],
        errorMessages: '',
        formHasErrors: false,
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        password:''
      }
    },
    
    computed: {
      form () {
        return {
          email: this.email,
        }
      },
      emailState(){
        if (this.email.length === 0) return null;
        return this.validEmail(this.email);
      }
    },

    methods: {
        validEmail(email) {
        // eslint-disable-next-line
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        async loginClicked() {
          try {
              console.log("test");
              const data = await this.$store.dispatch('authStore/login', 
              {
                email: this.email,
                password: this.password,
              });
              this.$emit('login');
              // if (this.usernameState) {
              //   this.$emit('login', {
              //     email: this.username,
              //     password: this.password,
              //   });
              // }
            console.log("success");
          } catch (err) {
            console.log(err, "fail here");
          }
        },

        async registerClicked() {
          try {
            console.log("registerClicked");
            console.log(this.role);
              await this.$store.dispatch(
                'authStore/registerUser',
                 {firstname : this.firstname,
                 lastname: this.lastname,
                 role: this.role,
                 email: this.email,
                 password: this.password
                 });
                console.log("success register");
                this.$emit('register');

            } catch (err) {
              console.log('Error **register**', err);
            }
        },
    }

}
</script>