module.exports = function (sequelize, DataTypes) {
    let Organization = sequelize.define('Organization', {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        organizationName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
            },
        

        websiteUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
            },

        subject: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                max: 1000
            }
            },

        })
    return Organization
}
