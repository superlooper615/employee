<template>

  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      :render-header="renderHeader"
      fixed
      prop="id"
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
      prop="tel"
      label="Tel"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="DATE"
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
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      renderHeader () {
        return (
          <div>
          <el-button size='small' on-click={()=>this.exportExcel()}> <span  class='el-icon-upload2'></span> ADD</el-button>
          </div>
          )
      }
    },
    data() {
      const item = {
        id: '1',
        firstName: 'Chonghe',
        lastName: 'Ping',
        tel: '7138887878',
        date: '10-25-2020',
        address: '4800 Calhoun Rd, Houston, TX 77004',
      };
      return {
        tableData: Array(20).fill(item),
      };
    },

  }
</script>