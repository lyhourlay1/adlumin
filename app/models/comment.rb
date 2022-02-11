class Comment < ApplicationRecord
    validates :content, presence:true

    # belongs_to :event_log,
    #     primary_key: :id,
    #     foreign_key: :event_log_id,
    #     class_name: :EventLog
end
