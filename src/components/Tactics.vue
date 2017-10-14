<template>
  <div>
    <div class="header">
      <h1> Tactics</h1>
    </div>
    <div class="container">
      <div v-for="tactic in content.tactics" class="section">
        <h2> {{tactic.title}} </h2>
        <h3> {{tactic.subtitle}} </h3>
        <div v-for="project in tactic.projects" class="projects">
            <div>
              <a :href="project.url"> {{project.name}} </a>
              <span>{{project.artist}} </span>
            </div>
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

<style lang="css" scoped>
</style>