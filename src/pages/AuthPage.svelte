<script>
    import Button from "../components/UI/Button.svelte"

    const srcLogo = '../static/mountain.png'
</script>

<div class="auth-page">
    <div class="auth-page_form">
      <div class="auth-page_form__header">
        <img
          class="auth-page_form__header icon"
          src={srcLogo}
          alt="Icon ToDo App"
        />
        <div class="header">
          <h1 class="auth-page_form__header text">
            Вход
          </h1>
        </div>

        <!-- <p :class="['auth-page_form__header', { message: mess }, { error: err }]">
          {{ mess ? mess : err }}
        </p> -->
      </div>
      <!-- <FormAuth v-model:user="user" @update:user="user = $event" /> -->
      <div class="auth-page_form__actions">
        <Button>ВОЙТИ</Button>
        <Button v-if="!isSignUp" type={'text'} >
          Зарегистрироваться
        </Button>
      </div>
    </div>
  </div>