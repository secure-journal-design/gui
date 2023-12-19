export interface Author {
    first_name: string;
    last_name: string;
    email: string;
}

export interface Article {
    article_id: number;
    title: string;
    body: string;
    updated_at: string;
    topic: string;
    subheading: string;
    picture_url: String;
    likes: number;
    author: Author;

}

