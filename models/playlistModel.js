let {Sequelize, db} = require('./../db')

class Playlist extends Sequelize.Model{}

Playlist.init({
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    name : Sequelize.STRING,
    length : {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    user_id : Sequelize.INTEGER,
    deleted_at: Sequelize.DATE ,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,

}, { sequelize: db, modelName: 'playlists', underscored: true });



module.exports = Playlist