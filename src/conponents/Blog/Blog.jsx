import PropTypes from 'prop-types';

const Blog = ({ blog }) => {

    const { cover_img, title, author_img, author_name, posted_date, reading_time } = blog;

    return (
        <div className="w-11/12">

            <img src={cover_img
            } alt="" />

            <div className="flex items-center gap-4">

                <img className="w-[48px]" src={author_img
                } alt="" />
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-xl font-bold">
                            {author_name}
                        </h3>
                        <p>{posted_date}</p>
                    </div>
                    <div className="flex gap-2">
                        <p>{reading_time} min read</p>
                        <img className="w-[24px] h-[28px]" src={'https://img.icons8.com/?size=100&id=mah7DGc4GwAU&format=png&color=000000'} alt="" />
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold">{title}</h2>

        </div>
    );
};




Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;