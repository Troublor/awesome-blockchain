Vue.component('entry', {
    props: [
        'title',
        'link',
        'authors',
        'venue',
        'year',
        'keywords',
        'serializedTags'
    ],
    computed:{
        tags: function () {
            return this.serializedTags.split("|")
        },
        "hTitle": function () {
            let reg = new RegExp("(" + this.keywords.join("|") + ")", "gi");
            return this.title.replace(reg, "<span style='background-color: #8ca0f754'>$1</span>");
        },
        "hAuthors": function () {
            let reg = new RegExp("(" + this.keywords.join("|") + ")", "gi");
            return this.authors.replace(reg, "<span  style='background-color: #8ca0f754'>$1</span>");
        },
        "hVenue": function () {
            let reg = new RegExp("(" + this.keywords.join("|") + ")", "gi");
            return this.venue.replace(reg, "<span style='background-color: #8ca0f754'>$1</span>");
        },
        "hYear": function () {
            let reg = new RegExp("(" + this.keywords.join("|") + ")", "gi");
            return this.year.replace(reg, "<span style='background-color: #8ca0f754'>$1</span>");
        }
    },
    template: `
<div class="text-left">
    <div>
        <a v-if="this.link.length > 0" v-bind:href="link" v-html="hTitle"></a>
        <span v-else v-html="hTitle"></span>
    </div>
    <ul>
        <li v-html="hAuthors"></li>
        <li><span v-html="hVenue"></span>&nbsp;<span v-html="hYear"></span></li>
        <p>
            <span class="badge badge-primary" v-for="tag in tags">{{ tag }}</span>
        </p>
        <p></p>
    </ul>
</div>
    `
});