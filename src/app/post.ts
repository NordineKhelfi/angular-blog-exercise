export class Post {
    public Date:Date;
    public Likes:number;

    constructor(public Title: string,
        public Text: string) {
            this.Date = new Date();
            this.Likes = 0;
         }

}
