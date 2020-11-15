<template>
  <el-table
    :data="boats"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-button type="success">ADD</el-button>
    <el-table-column
      prop="boatId"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Model"
      width="180">
    </el-table-column>
    <el-table-column
      prop="serialNumber"
      label="Serial number"
      width="180">
    </el-table-column>
    <el-table-column
      prop="captain"
      label="Captain"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Status"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="DATE"
      width="180">
    </el-table-column>
    <el-table-column
      prop="option"
      label="Option"
      width="280">
        <el-button size='small'> <span  class='el-icon-upload2'></span>DELETE</el-button>
        <el-button size='small'> <span  class='el-icon-upload2'></span> MODIFY</el-button>
    </el-table-column>
  </el-table>
</template>



<script>
import boatService from "../services/boatService"

  export default {
    // methods: {
    //   tableRowClassName({row, rowIndex}) {
    //     if (rowIndex === 1) {
    //       return 'warning-row';
    //     } else if (rowIndex === 3) {
    //       return 'success-row';
    //     }else if (rowIndex === 5) {
    //       return 'success-row';
    //     }else if (rowIndex === 7) {
    //       return 'success-row';
    //     } else if (rowIndex === 9) {
    //       return 'success-row';
    //     }
    //     return '';
    //   }
    // },

    data() {
      
      return {
        boats:[],
      }
    },
    async created(){
    try{
      this.boats = await boatService.getAll();
    }catch(err){
      this.error = err.message;
    }
  } 
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>