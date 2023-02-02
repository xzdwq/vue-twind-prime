<template>
  <div>
    <Toolbar>
      <template #end>
        <Button disabled class="mr-2">
          <i data-icon="settings" />
        </Button>
        <Button class="mr-2 p-button-danger p-button-text">
          <i data-icon="settings" class="filled" />
        </Button>
        <Button icon="pi pi-search" class="mr-2 p-button-success" />
        <InputText type="text" />
      </template>
    </Toolbar>
    <i data-icon="settings" />
    <i data-icon="settings" class="filled" />
  </div>
</template>
