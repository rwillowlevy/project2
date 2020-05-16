module.exports = function (sequelize, DataTypes) {
    let Organization = sequelize.define('organization', {

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

        otherInquiries: {
            type: DataTypes.STRING,
            allowNull: true
            },

        })
    return Organization
}
