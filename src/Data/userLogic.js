import Firebase from './Firebase';

const userLogic = (() => {

    function containsNumber(str){
        return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].any((number) => str.includes(number));
    }

    function isNumber(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    }

    async const addPhoto = (user) => {
        await Firebase.setUserProfilePicture(user.id, user.photo);
    }

    async const updateData = (user) => {
        if(containsNumber(user.name) || containsNumber(user.name)){
            throw "Há campos que não permitem números com valores numéricos.";
        }

        if(isNumber(user.cep)){
            throw "O campo de ser um valor numérico.";
        }
        if(user.name !== ''){
            await Firebase.setUserName(user.id, user.name);
        }
        if(user.surname !== ''){
            await Firebase.setUserSurname(user.id, user.surname);
        }
        if(user.nick !== ''){
            await Firebase.setUserNickname(user.id, user.nick);
        }
        if(user.photo !== ''){
            await Firebase.setUserProfilePicture(user.id, user.photo);
        }
        if(user.cep !== ''){
            await Firebase.setUserCep(user.id, user.cep);
        }
        if(user.address !== ''){
            await Firebase.setUserResidenceNumber(user.id, user.address);
        }
        if(user.complement !== ''){
            await Firebase.setUserComplement(user.id, user.complement);
        }
    }

    async const getUserById = (userId) => {
        return{
            name: await Firebase.getUserName(userId),
            surname: await Firebase.getUserSurname(userId),
            nick: await Firebase.getUserNickname(userId),
            photo: await Firebase.getUserProfilePicture(userId),
            email: await Firebase.getUserEmail(userId),
            cep: await Firebase.getUserCep(userId),
            address: await Firebase.getUserResidenceNumber(userId),
            complement: await Firebase.getUserComplement(userId),
            start: await Firebase.getUserAccountCreateDate(userId),
            categories: await Firebase.getUserCategoryClicks(userId)
        }
    }

    async const addCategory = (userId, category) => {
        let categories = await Firebase.getUserCategoryClicks(userId);
        categories.push(category);
        await Firebase.setUserCategoryClicks(userId, categories);
    }

    async const deleteAccount = (userId) => {
        await Firebase.deleteUser(userId);
    }

    return {
        addPhoto,
        updateData,
        getUserById,
        addCategory,
        deleteAccount
    }    
})();

export default userLogic;