import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between border-b-2 p-4 mx-4'>
            <h1 className='text-5xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;