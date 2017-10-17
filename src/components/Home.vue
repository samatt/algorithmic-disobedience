<template>
  <div>
    <div class="header">
      <h1 class="title"> Algorithmic Disobedience</h1>
      <h4 class="subtitle"> A workshop by Tega Brain & Surya Mattu</h4>
    </div>
    <div class="container">
      <div class="section">
        <h2>
          What is disobedience in a world shaped by algorithms?
        </h2>
        <p>
          Algorithmic disobedience calls for action in a world shaped by data and structured by algorithms.
          Algorithmic systems influence what news we see, who we date and how our neighbourhoods are policed.
          If human behavior is no longer seen as an individual’s response to their situation but instead as pattern and probability,
          what possibilities remain for action and resistance?
          This workshop looks to recent work by artists and journalists for tactics of algorithmic disobedience.
        </p>
    </div>
    <div class="section">
      <h2>
        Goals of the workshop
      </h2>
      <p>
        We invite the playful, the defiant and the dissatisfied to explore the growing role of these systems in our lives and script small acts of resistance for audit, obfuscation or opting out.
      </p>
    </div>
    <Tactics/>
    </div>
  </div>
</template>

<script>
import Tactics from '@/components/Tactics';

export default {
  name: 'Home',
  components: { Tactics },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">

</style>