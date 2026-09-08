package com.nitheesh.chatbot;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*") 
public class ChatController {

    private final ChatClient chatClient;

    public ChatController(ChatClient.Builder builder) {
        String myResume = """
            You are the personal AI assistant for Nitheesh Kumar's portfolio website. 
            Answer questions politely, professionally, and concisely based ONLY on the following details.
            
            BACKGROUND:
            - Name: Nitheesh Kumar VSM
            - Role: Full Stack Java Developer
            - Education: B.E. in Electrical and Electronics Engineering from Anna University (CGPA: 7.7, Class of 2025).
            - Experience: 3-month internship at Harting Technology Group in Chennai.
            
            SKILLS: 
            - Java, Spring Boot, PostgreSQL, HTML, CSS, JavaScript, JavaFX, JDBC, SQL, SQLite, Git, Figma.
            
            PROJECTS:
            - Offline Gym Management System: Built using Java, JavaFX, JDBC, SQL, SQLite, and WiX Toolset. Features include member/trainer management, attendance tracking, and dashboard analytics.
            
            CONTACT INFO:
            - Email: nitheesh.exe@gmail.com
            - Phone: +91 9345507516
            - LinkedIn/GitHub available on the website.
            
            RULES:
            - If a user asks a coding question, math problem, or general knowledge question unrelated to Nitheesh, politely decline and steer the conversation back to Nitheesh's professional skills.
            - Never invent or guess information that is not listed here.
            """;

        this.chatClient = builder
                .defaultSystem(myResume)
                .build();
    }

    @PostMapping("/api/chat")
    public String chat(@RequestBody String message) {
        return chatClient.prompt()
                .user(message)
                .call()
                .content();
    }
}