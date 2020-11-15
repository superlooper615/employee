<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2">About Us</h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <p class="text-justify">
       Diversitechnologies team is a 2020 Computer Information Systems graduate.
       Diversitechnologies built this employee managment application 
       as a final graduation project to our client 3 Amigos Boat Rental.

       The project team was formed on August 27th with the help of project sponsor, Thomas Gibbs. 
       On the same day the team had a Zoom meeting where they discussed the roles and responsibilities 
       that each individual would complete. William Moran was named Project Manager as the team was 
       firstly created. Then Elijah Wilbanks decided to take the position of assistant project manager to 
       aid William with the life cycle of the project. Kristal Jovellanos and Samuelson Jones took the 
       responsibility of the database as database administrators. Lily Dawit was named Lead developer, 
       and along with her Chonghe Ping and Tan Vo formed the group of developers for the project. 
       During the span of two weeks, the team came up with three possible clients for a project that would 
       solve one of their current problems. After a meeting with Thomas Gibbs, the team decided upon the idea 
       of helping 3 Amigos boat rental in Lake Travis. The team then contacted Dustin Dinh, 
       CEO of 3 Amigos boat rental, to begin the contract for the proposed solution. 
       The agreed upon solution will address their current issues with scheduling captains 
       for each work week as Dustin is doing this process by using only text messages.  
                  </p>

                </v-col>
                          <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Team memebers
          </th>
          <th class="text-left">
            Responsibility
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.Position }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/alex-unsplash.jpg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Elijah Wilbanks ',
            Position: 'Assistant Project Manager ',
          },
          {
            name: 'Lily Dawit ',
            Position: 'Developer/Tester ',
          },
          {
            name: 'Samuelson Jones ',
            Position: 'Database Manager',
          },
          {
            name: 'Kristal Marie Jovellanos ',
            Position: 'Database Designer ',
          },
          {
            name: 'William Moran  ',
            Position: 'Project Manager  ',
          },
          {
            name: 'Tan Vo ',
            Position: 'Developer',
          },
          {
            name: 'Chonghe Ping ',
            Position: 'Developer/operation ',
          },
          
        ],
      }
    },
  }
</script>
<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>