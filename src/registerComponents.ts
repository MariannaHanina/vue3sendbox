import { App } from 'vue';

// Form elements
import DsnButton from '@/components/DsnButton/DsnButton.vue';

// Headings
import DsnHeading1 from '@/components/DsnHeading1.vue';
import DsnHeading2 from '@/components/DsnHeading2.vue';

// Page elements
import DsnNav from '@/components/DsnNav.vue';

export default function registerComponents (app: App): void {
  app
    .component('dsn-button', DsnButton)
    .component('dsn-heading1', DsnHeading1)
    .component('dsn-heading2', DsnHeading2)
    .component('dsn-nav', DsnNav);
}
