const bcrypt = require('bcrypt');

class User {
    constructor(id, full_name, email, phone, national_id, password_hash, role, profile_picture_url, bio, verification_status, rating, total_reviews) {
        this.id = id;
        this.full_name = full_name;
        this.email = email;
        this.phone = phone;
        this.national_id = national_id;
        this.password_hash = password_hash;
        this.role = role;
        this.profile_picture_url = profile_picture_url;
        this.bio = bio;
        this.verification_status = verification_status;
        this.rating = rating;
        this.total_reviews = total_reviews;
        this.timestamps = new Date();
    }

    static async hashPassword(password) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    static async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}

module.exports = User;