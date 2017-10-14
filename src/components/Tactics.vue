<template>
  <div class="section">
      <h1 > Tactics</h1>
      <div class="tactic" v-for="tactic in content.tactics">
        <h2 class="title"> {{tactic.title}} </h2>
        <h3 class="subtitle"> {{tactic.subtitle}} </h3>
        <div v-for="project in tactic.projects" class="projects">
            <div>
              <a :href="project.url"> {{project.name}}</a> - <span>{{project.artist}} </span>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import TacticsContent from '@/tactics.json';

export default {
  name: 'Tactics',
  data() {
    return {
      content: TacticsContent,
    };
  },
};
</script>

<style lang="scss">
.tactic{
  margin-top: 60px;
}

.projects{
  margin-top: 8px;
}
</style>