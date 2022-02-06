class Comment < ApplicationRecord
    validates :content, :event_log_id, presence:true

    belongs_to :event_log,
        primary_key: :id,
        foreign_key: :event_log_id,
        class_name: :EventLog
end
