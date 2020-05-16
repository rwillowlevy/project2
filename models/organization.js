module.exports = function (sequelize, DataTypes) {
    const organization = sequelize.define('organization', {

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
        

        country: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
            },

        otherInquiries: {
            type: DataTypes.STRING,
            allowNull: true
            },

        })
    return organization
}
