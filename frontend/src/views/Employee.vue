<template>

  <el-table
    :data="employees"
    border
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      :render-header="renderHeader"
      fixed
      prop="employeeId"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="firstName"
      label="First Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="lastName"
      label="Last Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="Tel"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      width="580">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Option"
      width="180">
        <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">DELETE</el-button>
        <el-button type="text" size="small">MODIFY</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import employeeService from "../services/employeeService"
  export default {
    // methods: {
    //   handleClick(row) {
    //     console.log(row);
    //   },
    //   renderHeader () {
    //     return (
    //       <div>
    //       <el-button size='small' on-click={()=>this.exportExcel()}> <span  class='el-icon-upload2'></span> ADD</el-button>
    //       </div>
    //       )
    //   }
    // },
    data() {
      
      return{
        employees:[],
      
        
      }
    },
async created(){
    try{
      this.employees = await employeeService.getAll();
      // this.testTutors = await TutorService.getTutors();
      // this.tutors = await TutorService.getTutors();
    }catch(err){
      this.error = err.message;
    }
  } 
  }
</script>