<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area">
        {{ area }}
      </base-badge>
      <span class="description"
        ><p>{{ description }}</p></span
      >
      <span style="font-size: 20px">Location: {{ location }} </span>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="coachContactLink"
        >Contact</base-button
      >
      <base-button link :to="coachDetailsLink">View Detail</base-button>
    </div>
  </li>
</template>
<script>
import BaseBadge from '../ui/BaseBadge.vue';
export default {
  components: { BaseBadge },
  props: [
    'id',
    'firstName',
    'lastName',
    'rate',
    'areas',
    'location',
    'description',
  ],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #424242;
  border-radius: 12px;
}
h3 {
  font-size: 22px;
}
h3,
h4 {
  margin: 0.5rem 0;
}
div {
  margin: 0.5rem 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
.description {
  font-size: 18px;
}
</style>
