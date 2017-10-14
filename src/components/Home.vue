<template>
  <div>
    <div class="header">
      <h1> Algorithmic Disobedience</h1>
      <h4> A workshop by Tega Brain & Surya Mattu</h4>
    </div>
    <div class="container">
      <div class="section">
        <h2>
          What is disobedience in a world shaped by algorithms?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class="section">
      <h2>
        Goals of the workshop
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      </p>
    </div>
    <div class="section">
    <!--   <h2> See a list of <router-link :to="{ path: 'Tactics'}" > Tactics </router-link></h2> -->
    <Tactics/>
    </div>
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
.section {
  margin-top: 2px;
}
</style>