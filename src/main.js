import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArchive, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArchive);
library.add(faTrash);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
