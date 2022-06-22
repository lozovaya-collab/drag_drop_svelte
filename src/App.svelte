<script>
  import Desk from "./components/Desk.svelte";

  const categories = [
    {
      id: 0,
      title: "Сделать",
    },
    {
      id: 1,
      title: "В процессе",
    },
    {
      id: 2,
      title: "Закончено",
    },
  ];

  let tasks = [
    {
      id: 2,
      title: "Вымыть полы",
      categoryId: 2,
    },
    {
      id: 1,
      title: "Сходить к стоматологу",
      categoryId: 0,
    },
    {
      id: 0,
      title: "Написать отчет",
      categoryId: 1,
    },
    {
      id: 3,
      title: "Вынести мусор",
      categoryId: 2,
    },
    {
      id: 4,
      title: "Сходить в магазин",
      categoryId: 0,
    },
    {
      id: 5,
      title: "Купить овощи",
      categoryId: 0,
    },
    {
      id: 6,
      title: "Встреча с родителями",
      categoryId: 2,
    },
  ];
</script>

<svelte:head>
  <title>Svelte Drag and Drop</title>
  <html lang="ru" />
</svelte:head>
<main>
  <h1>DRAG AND DROP PROJECT</h1>
  <div class="todo-app">
    {#each categories as category (category.id)}
      <Desk title={category.title} categID={category.id} bind:tasks />
    {/each}
  </div>
</main>

<style global lang="scss">
  @import "./scss/main.scss";

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    @include title($black);
    font-size: 25px;
    margin: 20px 0;
    padding: 0 0 10px 0;
    border-bottom: 2px solid $purple;
  }
</style>
