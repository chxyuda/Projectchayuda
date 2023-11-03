<template>
	<div>
		<h2>รายชื่อเจ้าหน้าที่ตำรวจทั้งหมด</h2>
		<!-- <p><button v-on:click="logout">Logout</button></p> -->
		<h4>จํานวน เจ้าหน้าที่ {{ officers.length }} นาย</h4>
		<p><button v-on:click="navigateTo('/officer/create')">เพิ่มเจ้าหน้าที่</button></p>
		<div v-for="officer in officers" v-bind:key="officer.id">
			<p>ลำดับที่: {{ officer.id }}</p>
			<p>ชื่อ: {{ officer.name }}</p>
			<p>ยศ: {{ officer.rank }}</p>
			<p>เบอร์โทรศัพท์: {{ officer.telephone }}</p>
			<p>ที่อยู่: {{ officer.address }}</p>

			<p>
				
				<button v-on:click="navigateTo('/officer/' + officer.id)">ดูเจ้าหน้าที่</button>
				<button v-on:click="navigateTo('/officer/edit/' + officer.id)">
					แก้ไขข้อมูลเจ้าหน้าที่
				</button>
				<button v-on:click="deleteOfficer(officer)">ลบข้อมูลเจ้าหน้าที่</button>
			</p>
			<hr />
		</div>
	</div>
</template>
<script>
import OfficersService from "@/services/OfficersService";
export default {
	data() {
		return {
			officers: [],
		};
	},
	async created() {
		this.officers = (await OfficersService.index()).data;
	},
	methods: {
		// logout() {
		// 	this.$store.dispatch("setToken", null);
		// 	this.$store.dispatch("setOfficer", null);
		// 	this.$router.push({
		// 		name: "login",
		// 	});
		// },
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteOfficer(officer) {
			let result = confirm("Want to delete?");
			if (result) {
				try {
					await OfficersService.delete(officer);
					this.refreshData();
				} catch (err) {
					console.log(err);
				}
			}
		},
		async refreshData() {
			this.officers = (await OfficersService.index()).data;
		},
	},
};
</script>
<style scoped>
</style>