class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :handle, :image, :bio, :email
  has_many :posts
end
