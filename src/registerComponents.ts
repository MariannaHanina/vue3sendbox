import { App } from 'vue';

// Form elements
import DsnForm from '@/components/DsnForm.vue';
import DsnFormItem from '@/components/DsnFormItem.vue';
import DsnInput from '@/components/DsnInput.vue';
import DsnButton from '@/components/DsnButton/DsnButton.vue';
import DsnInput from '@/components/DsnInput.vue';

// Headings
import DsnHeading1 from '@/components/DsnHeading1.vue';
import DsnHeading2 from '@/components/DsnHeading2.vue';

// Page elements
import DsnNav from '@/components/DsnNav.vue';

// Table
import DsnTable from '@/components/DsnTable/DsnTable.vue';
import DsnColumn from '@/components/DsnTable/DsnColumn.vue';

export default function registerComponents (app: App): void {
  app
    .component('DsnForm', DsnForm)
    .component('DsnFormItem', DsnFormItem)
    .component('DsnInput', DsnInput)
    .component('DsnButton', DsnButton)
    .component('DsnColumn', DsnColumn)
    .component('DsnHeading1', DsnHeading1)
    .component('DsnHeading2', DsnHeading2)
    .component('DsnInput', DsnInput)
    .component('DsnNav', DsnNav)
    .component('DsnTable', DsnTable);
}
