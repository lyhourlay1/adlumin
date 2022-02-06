@comments.each_with_index do |comment|
    json.extract! comment, :id, :event_log_id, :content
end