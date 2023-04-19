<script>
    import TextInput from "./UI/TextInput.svelte";

    export let user;
</script>

<section class="form-auth">
    <TextInput
      bind:value={user.login}
      type={'text'}
      placeholder={'логин'}
    />
    <TextInput
      bind:value={user.password}
      type={'password'}
      placeholder={'пароль'}
    />
</section>
