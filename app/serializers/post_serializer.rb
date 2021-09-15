class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :updated_at
  has_one :user
end
