
@comments.each_with_index do |comment, index|
    json.set! comment.id do
        json.extract! comment, :id, :event_log_id, :content
    end
end