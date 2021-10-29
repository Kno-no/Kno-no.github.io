<template>
  <div class="home">
    <div class="f_1" id="f_1">
      <div class="overlay"></div>
      <div class="text">
        <div class="wrapper" v-for="(item , index) in c_1" :key="index">
          <div id="L" class="letter glitch" :data-text="item">{{item}}</div>
          <div class="shadow">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../lib/grained.js'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      c: '改变就是好事'
    }
  },
  created () {

  },
  mounted(){
    grained('#f_1', {
      animate: true,
      patternWidth: 500,
      patternHeight: 500,
      grainOpacity: 0.11,
      grainDensity: 1.3,
      grainWidth: 1,
      grainHeight: 1
    })
  },
  computed: {
    c_1 () {
      const r = []
      for (const i in this.c) {
        r.push(this.c[i])
      }
      return r
    }
  }

}
</script>
<style lang="scss">
$primaryColor: #e2e2e2;
$secondaryColor: #e2e2e2;
$steps: 20;
.home{
  .f_1{
    background:#e2e2e2;
    position:relative;
    height:100vh;

    .glitch {
        color:transparent;
        position: relative;
        font-size: inhert;
        text-transform: uppercase;
        text-shadow: 6px -6px 0px transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      
        &::before,
        &::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background: transparent;
            color: $primaryColor;
            overflow: hidden;
        }
      
        &::before {
            left: 7px;
            text-shadow: 0 0 #e2e2e2;
            animation: glitch-effect 3s infinite linear alternate-reverse;
        }

        &::after {
            left: 3px;
            text-shadow: 0 0 #e2e2e2;
            animation: glitch-effect 2s infinite linear alternate-reverse;
        }
    }

    @keyframes glitch-effect{
        @for $i from 0 through $steps{
            #{percentage($i*(1/$steps))}{
                clip: rect(random(100) + px, 999px, random(100) + px, 0);
            }
        }
    }





    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50vh;
      z-index: 100;

      background: rgb(255, 255, 255);
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 75%,
        rgba(255, 255, 255, 0.9) 80%,
        rgba(255, 255, 255, 0.25) 95%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    .text {
      font-family: "Yanone Kaffeesatz";
      font-size: 100px;
      display: flex;
      position: absolute;
      bottom: 35vh;
      left: 50%;
      transform: translateX(-50%);
      user-select: none;
      font-weight:500;

      .wrapper {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        .letter {
          transition: ease-out 1s;
          transform: translateY(30%);
        }
        .shadow {
          transform: scale(1, -1);
          color: #999;
          transition: ease-in 2s;
        }
        &:hover {
          .letter {
            transform: translateY(-200%);
          }
          .shadow {
            opacity: 0;
            transform: translateY(200%) scale(1, -1);
          }
        }
      }
    }
  }
}
</style>
