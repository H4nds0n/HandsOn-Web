<script>
    import "../../app.postcss";
    import Camera from "$lib/component/Camera.svelte";
    import TextAreaQuiz from "$lib/component/TextAreaQuiz.svelte";
  </script>
  
  <style>
      .parent-container{
          height: 80vh;
          padding: 10px;
          display: flex;
          column-gap: 20px;
      }
  
  </style>
  <div class="parent-container">
      <Camera/>
      <TextAreaQuiz/>
  </div>  
  <slot />