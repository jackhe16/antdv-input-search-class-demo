import { Input } from "ant-design-vue";
import { defineComponent } from "vue";
import styles from "./App.less";

export default defineComponent({
  setup() {
    return () => <Input.Search class={styles.search} />;
  },
});
