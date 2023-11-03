<template>
  <div>
    <h1>เพิ่มเจ้าหน้าที่</h1>
    <form v-on:submit.prevent="createOfficer">
      <p>ชื่อ-นามสกุล: <input type="text" v-model="officer.name" /></p>
      <p>ยศ: <input type="text" v-model="officer.rank" /></p>
      <p>ที่อยู่: <input type="text" v-model="officer.address" /></p>
      <p>เบอร์โทร: <input type="text" v-model="officer.telephone" /></p>
      <p><button type="submit">เพิ่มเจ้าหน้าที่</button></p>
    </form>
  </div>
</template>
<script>
import OfficersService from "@/services/OfficersService";

export default {
  data() {
    return {
      officer: {
        name: '',
        rank: '',
        address: '',
        telephone: '',
      }
    }
  },
  methods: {
    async createOfficer() {
      try {
        await OfficersService.post(this.officer)
        this.$router.push({
          name: 'officer'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
<style scoped>
.dropbox {
  outline: 2px dashed grey;
  /* the dash box */
  outline-offset: -10px;
  background: lemonchiffon;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px;
  /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0;
  /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: khaki;
  /* when mouse over to the drop zone, change color
    */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

ul.pictures {
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
}

ul.pictures li {
  float: left;
}

ul.pictures li img {
  max-width: 180px;
  margin-right: 20px;
}

.clearfix {
  clear: both;
}

.thumbnail-pic img {
  width: 200px
}</style>
