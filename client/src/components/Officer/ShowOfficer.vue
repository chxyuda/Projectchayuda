<template>
	<div>
		<h1>แสดง ข้อมูลหมวกกันน็อค</h1>
		<p>ลำดับที่: {{ officer.id }}</p>
		<p>ชื่อ: {{ officer.name }}</p>
		<p>ยศ: {{ officer.rank }}</p>
		<p>เบอร์โทรศัพท์: {{ officer.telephone }}</p>
		<p>ที่อยู่: {{ officer.address }}</p>
		<p>
			<button v-on:click="navigateTo('/officer/edit/' + Officer.id)">
				แก้ไข bloghelmet
			</button>
			<button v-on:click="navigateTo('/officers')">กลับ</button>
		</p>
	</div>
</template>
<script>
import OfficersService from "@/services/OfficersService";
export default {
	data() {
		return {
			officer: null,
		};
	},
	async created() {
		try {
			let officerId = this.$route.params.officerId;
			this.officer = (await OfficersService.show(officerId)).data;
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
	},
};
</script>
<style scoped></style>
