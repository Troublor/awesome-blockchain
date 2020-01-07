Vue.component('entry', {
    props: [
        'title',
        'link',
        'authors',
        'venue',
        'serializedTags'
    ],
    computed:{
        tags: function () {
            return this.serializedTags.split("|")
        }
    },
    template: `
<div class="text-left">
    <div>
        <a v-if="this.link.length > 0" v-bind:href="{link}">{{ title }}</a>
        <span v-else>{{ title }}</span>
    </div>
    <ul>
        <li>{{ authors }}</li>
        <li>{{ venue }}</li>
        <p>
            <span class="badge badge-primary" v-for="tag in tags">{{ tag }}</span>
        </p>
        <p></p>
    </ul>
</div>
    `
});