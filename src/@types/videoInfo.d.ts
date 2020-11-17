interface IVideoInfo {
    id: string;

    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        channelTitle: string;
        tags: Array<string>;

        thumbnails: {
            default: {
                url: string;
            };
            medium: {
                url: string;
            };
            high: {
                url: string;
            };
            standard: {
                url: string;
            };
            maxres: {
                url: string;
            };
        };

        player: {
            embedHtml: string;
        };
    };
}
