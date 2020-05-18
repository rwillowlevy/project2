let bcrypt = require("bcryptjs")

module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [6, 20]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    //function to validate password
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    //function using bcrypt to hash password before storing to database
    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
}
