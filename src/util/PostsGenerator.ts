import Post from "./Post";

class PostGenerator {

    getPosts(): Post[] {
        return [
            {
                id: 1,
                author: {
                    avatarUrl: 'https://avatars.githubusercontent.com/u/7081175?v=4',
                    name: 'Jean Leal Silva',
                    role: 'Software Engineer Senior'
                },
                content: "<p>Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat.</p>\n" +
                    "                <p>Praesent lacinia ultrices consectetur. Sed non ipsum felis.Suco de cevadiss,</p>\n" +
                    "                <p><a href=\"#\">github.com/jeanls</a></p>\n" +
                    "                <p>\n" +
                    "                    <a href=\"#\">#ola </a>\n" +
                    "                    <a href=\"#\">#react</a>\n" +
                    "                </p>",
                publishedAt: new Date('2022-05-22 00:00:00')
            },
            {
                id: 2,
                author: {
                    avatarUrl: 'https://avatars.githubusercontent.com/u/7081175?v=4',
                    name: 'Cecília Teles Leal',
                    role: 'Bebê'
                },
                content: "<p>Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat.</p>\n" +
                    "                <p>Praesent lacinia ultrices consectetur. Sed non ipsum felis.Suco de cevadiss,</p>\n" +
                    "                <p><a href=\"#\">github.com/jeanls</a></p>\n" +
                    "                <p>\n" +
                    "                    <a href=\"#\">#ola </a>\n" +
                    "                    <a href=\"#\">#react</a>\n" +
                    "                </p>",
                publishedAt: new Date('2022-07-06 03:15:00')
            },
        ];
    }

}

export default new PostGenerator();
