<script>
    import { onMount } from "svelte";
    import { push } from 'svelte-spa-router';

    import Button from "../components/UI/Button.svelte"
    import FormAuth from "../components/FormAuth.svelte";

    import { apiService } from "../shared/api/swagger/swagger";

    const srcLogo = '../static/mountain.png';

    let user = { login: null, password: null };
    let mess = null;
    let err = null;
    let isSignUp = false;
    let isLoading = false;

    $: isDisabled = (!user.login || !user.password) && !isLoading;

    const toSignUpForm = () => {
      isSignUp = true;

      user = {
        login: null,
        password: null,
      };
    }

    const signUp = () => {
      isLoading = true;
      
      apiService.users
        .Create({ ...user })
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data))
          mess = "вы успешно зарегистрировались!";
          setTimeout(() => {
            push('/');
            isLoading = false;
            mess = null;
          }, 1000);
        })
        .catch(() => {
          err = "ошибка!!";

          setTimeout(() => {
            user = {
              login: null,
              password: null,
            };

            err = null;
          });
        }, 1000);
    }

    const logIn = () => {
      isLoading = true;

      apiService.login
        .Login(user)
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data))
          setTimeout(() => {
            push('/');
            isLoading = false;
            mess = null;
          }, 1000);
        })
        .catch((err) => {
          err = err.message;

          setTimeout(() => {
            user = {
              login: null,
              password: null,
            };

            err = null;
          }, 2000);
        });
    }


    const submit = () => isSignUp ? signUp() : logIn();

    onMount(async () => {
      isSignUp = false;
    });
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

        <p class={`auth-page_form__header ${mess ? 'message' : ''} ${err ? 'error' : ''}`}>
          { mess ? mess : err || '' }
        </p>
      </div>

      <FormAuth bind:user />

      <div class="auth-page_form__actions">
        <Button on:click={submit} disabled={isDisabled}> { isSignUp ? "ЗАРЕГИСТРИРОВАТЬСЯ" : "ВОЙТИ" } </Button>
        {#if !isSignUp}
          <Button on:click={toSignUpForm} type={'text'} >
            Зарегистрироваться
          </Button>
        {/if}
      </div>
    </div>
  </div>